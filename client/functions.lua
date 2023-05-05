local spawnedPeds = {}

function spawnPed(id, ped, coords, animDict, animName)
    local pedModel = ped
    
    RequestModel(pedModel)
    while not HasModelLoaded(pedModel) do
        RequestModel(pedModel)
        Wait(100)
    end

    local createdPed = CreatePed(5, pedModel, coords.x, coords.y, coords.z - 1.0, coords.w, false, false)
    ClearPedTasks(createdPed)
    ClearPedSecondaryTask(createdPed)
    TaskSetBlockingOfNonTemporaryEvents(createdPed, true)
    SetPedFleeAttributes(createdPed, 0, 0)
    SetPedCombatAttributes(createdPed, 17, 1)

    SetPedSeeingRange(createdPed, 0.0)
    SetPedHearingRange(createdPed, 0.0)
    SetPedAlertness(createdPed, 0)
    SetPedKeepTask(createdPed, true)

    if animDict and animName then
		RequestAnimDict(animDict)
		while not HasAnimDictLoaded(animDict) do
			Citizen.Wait(1)
		end
		TaskPlayAnim(createdPed, animDict, animName, 8.0, 0, -1, 1, 0, 0, 0)
	end

    spawnedPeds[id] = createdPed

    SetEntityInvincible(createdPed, true)
end

function taskPedPlayAnim(ped, animDict, animName)
    if animDict and animName then
		RequestAnimDict(animDict)
		while not HasAnimDictLoaded(animDict) do
			Citizen.Wait(1)
		end
		TaskPlayAnim(ped, animDict, animName, 8.0, 0, -1, 1, 0, 0, 0)
	end
end

function getPed(id)
    return spawnedPeds[id]
end

function deletePed(id)
    DeletePed(spawnedPeds[id])
    spawnedPeds[id] = nil
end

AddEventHandler('onResourceStop', function(resourcename)
    if GetCurrentResourceName() == resourcename then
        for k,v in pairs(spawnedPeds) do
            DeletePed(v)
        end
    end
end)