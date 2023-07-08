local spawnCoord = vec4(-2149.7471, 226.6672, 184.6017, 204.4179)
local coordFace = vec4(-2149.0474, 223.7749, 184.6017, 64.3709)
local goAway = vec4(-2150.8723, 221.8923, 184.6017, 126.3077)
local facing = vec3(-2150.75, 225.44, 185.16)
local cam
local spawned, ready = false, false

local function toggleNuiFrame(shouldShow)
	while not ready do
		Wait(250)
	end
	SetNuiFocus(shouldShow, shouldShow)
	SendReactMessage("setVisible", shouldShow)
end

RegisterNetEvent('esx_identity:setPlayerData', function(data)
	SetTimeout(1, function()
		ESX.SetPlayerData("name", ('%s %s'):format(data.firstName, data.lastName))
		ESX.SetPlayerData('firstName', data.firstName)
		ESX.SetPlayerData('lastName', data.lastName)
		ESX.SetPlayerData('dateofbirth', data.dateOfBirth)
		ESX.SetPlayerData('sex', data.sex)
		ESX.SetPlayerData('height', data.height)
	end)
end)

RegisterNetEvent("esx_identity:alreadyRegistered", function()
	TriggerEvent("esx_skin:playerRegistered")
end)

RegisterNetEvent("esx:onPlayerSpawn", function()
	spawned = true
end)

RegisterNetEvent("bcs_identity:startRegister", function()
	TriggerEvent("esx_skin:resetFirstSpawn")
	while not spawned and not ESX.GetConfig().Multichar do
		Wait(500)
	end
	SetEntityCoords(PlayerPedId(), facing)

	if not ESX.PlayerData.dead then
		StartRegistry()
	end
end)

RegisterNUICallback("initialize", function(data, cb)
	ready = true
	cb(UIConfig)
end)

RegisterNUICallback("register", function(data, cb)
	data.sex = data.gender == "male" and "m" or "f"
	local Promise = promise.new()
	ESX.TriggerServerCallback("bcs_identity:registerIdentity", function(callback)
		if callback then
			ESX.ShowNotification("Thank you for registering")
			DoScreenFadeOut(500)
			while not IsScreenFadedOut() do
				Wait(100)
			end
			if not ESX.GetConfig().Multichar then
				local spawn = ESX.GetConfig().DefaultSpawn or { x = -269.4, y = -955.3, z = 31.2, heading = 205.8 }
				SetEntityCoords(PlayerPedId(), spawn.x, spawn.y, spawn.z - 1)
				SetEntityHeading(PlayerPedId(), spawn.heading)
			end
			FreezeEntityPosition(PlayerPedId(), true)
			while not HasCollisionLoadedAroundEntity(PlayerPedId()) do
				Wait(200)
			end
			FreezeEntityPosition(PlayerPedId(), false)
			DoScreenFadeIn(500)

			if not ESX.GetConfig().Multichar then
				TriggerEvent("esx_skin:openSaveableMenu")
				TriggerEvent("esx_skin:playerRegistered")
			end
		end
		local retData <const> = { success = callback }
		Promise:resolve(retData)
	end, data)
	cb(Citizen.Await(Promise))
end)

function StartRegistry()
	toggleNuiFrame(true)
	debugPrint("Show NUI frame")
	cam = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", facing, vec3(-0.96, 0.0, 238.92), 30.0, false, 0)
	SetCamActive(cam, true)
	RenderScriptCams(true, true, 100, true, true)
	DisplayRadar(false)
	spawnPed("previewPed", `mp_m_freemode_01`, spawnCoord)
	local ped = getPed("previewPed")
	TaskGoToCoordAnyMeans(ped, coordFace.x, coordFace.y, coordFace.z, 1.0, 0, 0, 786603, 0xbf800000)
	Wait(3000)
	TaskTurnPedToFaceCoord(ped, facing, -1)
	Wait(1000)
	taskPedPlayAnim(ped, "anim@heists@humane_labs@finale@strip_club", "ped_b_celebrate_loop")
end

RegisterNUICallback("hideFrame", function(_, cb)
	toggleNuiFrame(false)
	if getPed("previewPed") then
		ClearPedTasksImmediately(getPed("previewPed"))
		TaskGoToCoordAnyMeans(getPed("previewPed"), goAway.x, goAway.y, goAway.z, 1.0, 0, 0, 786603, 0xbf800000)
		Wait(3000)
		deletePed("previewPed")
	end
	RenderScriptCams(false)
	DestroyCam(cam)
	cam = nil
	DisplayRadar(true)
	debugPrint("Hide NUI frame")
	cb({})
end)

RegisterNUICallback("setGender", function(data, cb)
	if getPed("previewPed") then
		ClearPedTasksImmediately(getPed("previewPed"))
		TaskGoToCoordAnyMeans(getPed("previewPed"), goAway.x, goAway.y, goAway.z, 1.0, 0, 0, 786603, 0xbf800000)
		Wait(1000)
		deletePed("previewPed")
	end
	if data.gender == "male" then
		spawnPed("previewPed", `mp_m_freemode_01`, spawnCoord)
		local ped = getPed("previewPed")
		TaskGoToCoordAnyMeans(ped, coordFace.x, coordFace.y, coordFace.z, 1.0, 0, 0, 786603, 0xbf800000)
		Wait(3000)
		TaskTurnPedToFaceCoord(ped, facing, -1)
		Wait(1000)
		taskPedPlayAnim(ped, "anim@heists@humane_labs@finale@strip_club", "ped_b_celebrate_loop")
	else
		spawnPed("previewPed", `mp_f_freemode_01`, spawnCoord)
		local ped = getPed("previewPed")
		TaskGoToCoordAnyMeans(ped, coordFace.x, coordFace.y, coordFace.z, 1.0, 0, 0, 786603, 0xbf800000)
		Wait(3000)
		TaskTurnPedToFaceCoord(ped, facing, -1)
		Wait(1000)
		taskPedPlayAnim(ped, "amb@world_human_hang_out_street@female_hold_arm@idle_a", "idle_a")
	end
	cb({})
end)
