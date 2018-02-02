/*
  This script runs in the the browser dev tools to load all commenters on an
  Instagram post and select one randomly for giveways, contests, etc..

  It programatically retrieves and excludes the owner of the post.

  Navigate to post
  Load entire script in browser and press enter
*/


const me = document.getElementsByClassName('_2g7d5')[0].title

function loadAllComments(){
  let load_more = document.querySelector('._m3m1c._1s3cd')

  return new Promise(resolve => {
    setInterval(() => {
      if (document.querySelector('._m3m1c._1s3cd') == null) {
        resolve();
      }
      load_more.click()
    }, 300)
  })
}

async function randomizeWinner(){
  await loadAllComments()
  let participants = []

  let commenters = document.querySelectorAll('._2g7d5.notranslate._95hvo')

  for(let i = 0; i < commenters.length; i++) {
    let commenter = commenters[i]
    if (commenter.title != me){
      let title = commenter.title
      participants.push(title)
    }
  }

  console.log('Number of Entries: ' + participants.length)

  let display = document.createElement('div')
  display.style.position = 'absolute'
  display.style.left = '50%';
  display.style.top = '50%';
  display.style.transform = 'translateX(-50%) translateY(-50%)';
  display.style.zIndex = 1000000;
  display.style.fontSize = '100px'
  document.body.innerHTML = ''
  document.body.appendChild(display)

  let spinWheelInterval = setInterval(() => {
     let random = Math.floor(participants.length * Math.random())
     display.innerHTML = participants[random]
  }, 100)

  setTimeout(() => {
     clearInterval(spinWheelInterval)
     console.log(display.innerHTML)
  }, 8000)
}

randomizeWinner()
