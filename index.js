document.getElementById('startTest').addEventListener('click',()=>{
    document.getElementsByTagName('main')[0].style.display = 'none'
    document.getElementById('rules').style.display = 'flex'
})
let counting = 1;
let elapsed;
let started = false
document.getElementById('gotIt').addEventListener('click',()=>{
    document.getElementById('rules').style.display = 'none'
    document.getElementById('arena').style.display = 'block'
    
    const interval = setInterval(()=>{
         if(counting > 3) {
            counting = 1
            document.getElementById('counting').style.display = 'none'
            document.getElementById('counting').textContent = ""
            clearInterval(interval)
            const second = ((Math.random()*5) +2)*1000
            setTimeout(()=>{
                 elapsed = Date.now()
                document.getElementById('circle').style.backgroundColor = 'green'
                started = true
               
            },second)

        }
        else{
            document.getElementById('counting').textContent = counting
        console.log(counting)
        counting++
        }
       
    },1000)
})
document.getElementById('click').addEventListener('click',()=>{
    if(started == true){
        const reaction = Date.now() - elapsed
        let color;
        let message;
        if(reaction < 500){
             color = 'green'
             message = "You are safe"
        }
        else if(reaction > 500){
           color = 'red'
           message = 'Leave This Planet asap'
        }
        else if(reaction == 500){
            color = 'yellow'
            message = 'You are ghost'
        }
         document.getElementById('scoreContainer').style.backgroundColor = color
          document.getElementById('message').textContent = message
        document.getElementById('score').textContent = `${reaction}ms`
        document.getElementById('scoreContainer').style.display = 'block'
        document.getElementById('retry').style.display = 'block'
        started = false
    }
})

document.getElementById('retry').addEventListener('click',()=>{
    document.getElementById('scoreContainer').style.display = 'none'
    document.getElementById('retry').style.display = 'none'
    document.getElementById('circle').style.backgroundColor = 'blue'
    document.getElementById('counting').style.display = 'block'
    counting = 1
     const interval = setInterval(()=>{
         if(counting > 3) {
            counting = 1
            document.getElementById('counting').style.display = 'none'
             document.getElementById('counting').textContent = ""
            clearInterval(interval)
            const second = ((Math.random()*5) +2)*1000
            setTimeout(()=>{
                 elapsed = Date.now()
                document.getElementById('circle').style.backgroundColor = 'green'
                started = true
               
            },second)

        }
        else{
            document.getElementById('counting').textContent = counting
        console.log(counting)
        counting++
        }
       
    },1000)
})