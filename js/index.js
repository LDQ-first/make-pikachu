import '../sass/defalut.scss'
// import '../sass/index.scss'

let showCode = `.preview-wrapper {
  background: #FFE600;
}

.nose {
  width: 0px;
  height: 0px;
  border: 11px solid;
  border-width: 12px;
  border-color: #000 transparent transparent;  
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}

.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #FFF;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
  }
  &.left {
    right: 50%;
    margin-right: 90px;
  }
  &.right {
    left: 50%;
    margin-left: 90px;
  }
}

.face {
  width: 68px;
  height: 68px;
  background: #fc0d1c;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
  &.left {
    right: 50%;
    margin-right: 116px;
  }
  &.right {
    left: 50%;
    margin-left: 116px;
  }
}

.upperlip {
  height: 25px;
  width: 76px;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top: 46px;
  background: #FFE600;
  &.left {
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    right: 50%;
    transform: rotate(-22deg);
  }
  &.right {
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    left: 50%;
    transform: rotate(20deg);
  }
}

.lowerlip-wrapper {
  position: absolute;
  bottom: -50px;
  left: 50%;
  margin-left: -150px;
  height: 158px;
  width: 300px;
  overflow: hidden;
  .lowerlip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    width: 300px;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      width: 140px;
      height: 140px;
      left: 50%;
      margin-left: -70px;
      background: #fc4a62;
      border-radius: 50%;
    }
  }
}`

let relCode = `.preview-wrapper {
  background: #FFE600; }

.nose {
  width: 0px;
  height: 0px;
  border: 11px solid;
  border-width: 12px;
  border-color: #000 transparent transparent;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px; }

.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000; }
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #FFF;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000; }
  .eye.left {
    right: 50%;
    margin-right: 90px; }
  .eye.right {
    left: 50%;
    margin-left: 90px; }

.face {
  width: 68px;
  height: 68px;
  background: #fc0d1c;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px; }
  .face.left {
    right: 50%;
    margin-right: 116px; }
  .face.right {
    left: 50%;
    margin-left: 116px; }

.upperlip {
  height: 25px;
  width: 76px;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top: 46px;
  background: #FFE600; }
  .upperlip.left {
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    right: 50%;
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg); }
  .upperlip.right {
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    left: 50%;
    -webkit-transform: rotate(20deg);
            transform: rotate(20deg); }

.lowerlip-wrapper {
  position: absolute;
  bottom: -50px;
  left: 50%;
  margin-left: -150px;
  height: 158px;
  width: 300px;
  overflow: hidden; }
  .lowerlip-wrapper .lowerlip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    width: 300px;
    overflow: hidden; }
    .lowerlip-wrapper .lowerlip::after {
      content: '';
      position: absolute;
      bottom: -20px;
      width: 140px;
      height: 140px;
      left: 50%;
      margin-left: -70px;
      background: #fc4a62;
      border-radius: 50%; }`

!function() {
  let duration = 50
  $('.actions').on('click', 'button', (e) => {
    let $btn = $(e.currentTarget)
    let speed = $btn.attr('data-speed')
    $btn.addClass('active')
        .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  const writeCode = (showCode, relCode, fn) => {
    const container = document.querySelector('#code')
    const styleTag = document.querySelector('#styleTag')
    let n = 0
    let timer
    timer = setTimeout(function run () {
      n +=1
      container.innerHTML = showCode.substring(0, n)
      styleTag.innerHTML = relCode.substring(0, 1.1 * n)
      container.scrollTop = container.scrollHeight
      if (n < showCode.length) {
        timer = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }
  writeCode(showCode, relCode)

}.call()