let timing = new Date('2025-01-01T00:00:00')

function updateTiming(){
    const currentTime = new Date();

    const diffTime = timing-currentTime;
    console.log(diffTime);

    let days = Math.floor(diffTime/(1000*60*60*24))

    let hours = Math.floor((diffTime % (1000*60*60*24))/(1000*60*60))

    let minutes = Math.floor((diffTime % (1000*60*60))/(1000*60))

    let sec = Math.floor((diffTime % (1000*60))/1000)

    console.log(hours , days , minutes , sec);

    document.querySelector(".timer").textContent = `${days}d  ${hours}h  ${minutes}m ${sec}s `
    
    setTimeout(updateTiming,1000)
}

updateTiming();