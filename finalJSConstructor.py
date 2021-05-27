import pandas as pd
import sys
filejs=open(sys.argv[1].split('.')[0]+'.js',"a+");
nodenames=pd.read_csv("Nodes.csv");
linkvals=pd.read_csv(sys.argv[1]);
filejs.writelines("let dataV={\"nodes\": [\n");
listnodepresent=[0]*(len(nodenames));
for i in range(len(linkvals)):
    if(linkvals.iloc[i,2]=="Undf"):
        linkvals.iloc[i,2]=0;



for i in range(len(linkvals)):
    if(linkvals.iloc[i,2]!=-0.1):
        for j in range(len(nodenames)):
            if linkvals.iloc[i,0]==nodenames.iloc[j,0]:
                listnodepresent[j]+=1;
            if linkvals.iloc[i,1]==nodenames.iloc[j,0]:
                listnodepresent[j]+=1;

with open('superstructure.txt', 'r') as file:
        superstructure = file.read().replace('\n', '')

for i in range(len(nodenames)):
    if listnodepresent[i]>0:# or sum(listnodepresent[i+1:len(listnodepresent)-1])==0:
        if i == len(nodenames)-1:
            filejs.writelines("{\"name\": \""+nodenames.iloc[i,0]+"\"}\n],\n \"links\": [\n ");
        else:
            filejs.writelines("{\"name\":\""+nodenames.iloc[i,0]+"\"},\n");







for i in range(len(linkvals)):
    if linkvals.iloc[i,2]!=0:
        linename="{\"source\":\""+linkvals.iloc[i,0]+"\", ";
        linename+="\"target\":\""+linkvals.iloc[i,1]+"\", ";
        linename+="\"value\":"+str(linkvals.iloc[i,2])+", ";
        linename+="\"optimal\":\""+"yes"+"\"} ";
        if i == len(linkvals)-1 or sum(linkvals.iloc[i+1:len(linkvals)-1,2])==0:
            filejs.writelines(linename+",\n\n\n"+superstructure+"]}; \n")
        else:
            filejs.writelines(linename+", \n")

