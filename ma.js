function result(){
    var name = document.getElementById("name").value;
    var result = document.getElementById("result");
    var marks = Math.random()*100;
    alert("please enter valid registration number")

    if (marks >= 35) {
        result.innerHTML = name + "  neen pass agbitte kano😎🎉"+ marks.toFixed(2);
    }else{
        result.innerHTML = name + " nanu neenu otke mundin varsha bariva nadi🤦‍♂️😢" + marks.toFixed(2);
    }
    }
   
    

