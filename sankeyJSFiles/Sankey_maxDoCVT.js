let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPLA"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":2.216, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.216, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2985, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0204, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1783, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3566, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":2.0204, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":1.5759, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.3031, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.1414, "optimal":"yes"} ]}; 
