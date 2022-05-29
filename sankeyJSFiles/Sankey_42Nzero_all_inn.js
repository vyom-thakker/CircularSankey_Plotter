let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"},
{"name":"LCUpstream"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} ,
{"source":"Households", "target":"Curbside Collection", "value":0.3514, "optimal":"yes"} ,
{"source":"Households", "target":"Losses", "value":0.3633, "optimal":"yes"} ,
{"source":"Curbside Collection", "target":"Segregation", "value":0.3204, "optimal":"yes"} ,
{"source":"Curbside Collection", "target":"Losses", "value":0.0283, "optimal":"yes"} ,
{"source":"Segregation", "target":"Landfill", "value":0.0565, "optimal":"yes"} ,
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1501, "optimal":"yes"} ,
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0025, "optimal":"yes"} ,
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0856, "optimal":"yes"},
{"source":"LCUpstream", "target":"LDPE", "value":0.00001, "optimal":"yes"} ,
{"target":"LCUpstream", "source":"LABS from chemical recycling of PE", "value":0.90, "optimal":"yes"}]};
