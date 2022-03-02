let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":1.5601, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2997, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.639, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2208, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.4943, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1319, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2637, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.6943, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.3573, "optimal":"yes"} ]}; 
