Config = {}

-- [Config.EnableCommands]
-- Enables Commands Such As /char and /chardel
Config.EnableCommands = ESX.GetConfig().EnableDebug

-- EXPERIMENTAL Character Registration Method
Config.UseDeferrals = false

-- These values are for the date format in the registration menu
-- Choices: DD/MM/YYYY | MM/DD/YYYY | YYYY/MM/DD
Config.DateFormat = "DD/MM/YYYY"

-- These values are for the second input validation in server/main.lua
Config.MaxNameLength = 20                            -- Max Name Length.
Config.MinHeight = 120                               -- 120 cm lowest height
Config.MaxHeight = 220                               -- 220 cm max height.
Config.LowestYear = 1900                             -- 112 years old is the oldest you can be.
Config.HighestYear = 2003                            -- 18 years old is the youngest you can be.

Config.FullCharDelete = true                         -- Delete all reference to character.
Config.EnableDebugging = ESX.GetConfig().EnableDebug -- prints for debugging :)

UIConfig = {
	server_name = "Your servername",
	-- AVAILABLE COLORS
	-- red, orange, amber, yellow, lime, green, emerald, teal, cyan, blue
	-- sky, indigo, violet, purple, fushcia, pink, rose
	color = "red",
	minimum_height = 100,
	maximum_height = 250,
	locale = {
		["registration"] = "REGISTRATION",
		["welcome"] = "Welcome to Your servername! Please create your identity before continuing.",
		["gender"] = "GENDER",
		["register"] = "REGISTER",
		["firstname"] = "FIRSTNAME",
		["lastname"] = "LASTNAME",
		["date_of_birth"] = "DATE OF BIRTH",
		["height"] = "HEIGHT",
		["description"] = "DESCRIPTION",
	},
}
