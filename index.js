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
            document.getElementById('counting').style.display = 'none'
            clearInterval(interval)
            const second = ((Math.random()*5) +2)*1000
            setTimeout(()=>{
                 elapsed = Date.now()
                document.getElementById('circle').style.backgroundColor = 'green'
                started = true
               
            },second)

        }
        document.getElementById('counting').textContent = counting
        counting++
       
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
        started = false
    }
})

