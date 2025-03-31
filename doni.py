feet=int(input("enetr feet"))
l=[]
l.append(feet*12)
l.append(feet*0.333)
l.append(feet*0.000189)
l.append(feet*304.8)
l.append(feet*30.48)
l.append(feet*0.305)
l.append(feet*0.000305)
while(1):
    print("select option")
    print("1.inch\n 2.yard\n3.mile\n4.milimeter\ncentimwer\nmeter\nkilometer\n")
    option=int(input())
    if(option<=7):
        print(l[option])
    else:
        break;
