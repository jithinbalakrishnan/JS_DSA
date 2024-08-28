let tech = [
    { id: 1, name: "Frontend", value: "HTML" },
    { id: 2, name: "Frontend", value: "React" },
    { id: 3, name: "Backend", value: "Node" },
    { id: 4, name: "Backend", value: "PHP" },
   
     { id: 5, name: "Backend", value: "Java" },
   ]; 
   
   function getGroup(data) {
       let result = {}
       data.forEach((item)=> {
           if(result[item.name]) {
               let data1 =  result[item.name]
               data1.push(item)
               result[item.name] = data1
           } else {
            result[item.name] = [{...item}]
           }
           
           
           
       })
       console.log(result)
       return result
   }
   getGroup(tech)
    