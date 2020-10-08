import { render } from '@testing-library/react';
import React from 'react';

var x = 10, y = 10, arr = [10], arrC = [10];
for (var i = 0; i < x; i++) {
  arr[i] = [10]
  arrC[i] = [10]
  for (var j = 0; j < y; j++) {
    arr[i][j] = 0
    arrC[i][j] = 0
  }
}

export class Field extends React.Component {
  arr = arr
  arrC = arrC
  arrComp = arrC
  arrPlayer = arr
  rez = true
  constructor(props) {
    super(props)
    this.state = {
      real: 0,
      statusGame: ["ваш ход", "ход противника", "победa ваша", "победa противвника"],
      addClassN: [
        "btn__pos__field",
        "field__boot",
        "field__boom",
        "field__flub"
      ]
    }
  }
  real = 0
  sumBoot = 0
  enemyCount = 40
  playerCount = 40
  createRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
  }
  autoPosition(a, b) {
    let player = this.arrPlayer
    let comp = this.arrComp
    this.randPosition(player)
    this.randPosition(comp)
    this.positionViev(player)
  }
  positionViev(arry) {
    let boot = this.state.addClassN[1]
    for (let r = 0; r < 10; r++) {
      for (let p = 0; p < 10; p++) {
        if (arry[r][p] == 2) {
          document.getElementById("pos" + r + p).className = boot
        }
      }
    }
  }
  // функция ручного расставления кораблей(дополнительно)
  // сделала до того как перечитала тз
  clickPosition(a, b) {
    let boot = this.state.addClassN[1]
    let sea = this.state.addClassN[0]
    if (this.sumBoot <= 38) {
      if (this.arrPlayer[a][b] == 2) {
        this.arrPlayer[a][b] -= 2
        document.getElementById("pos" + a + b).className = sea
        this.sumBoot -= 2
      }
      else {
        this.arrPlayer[a][b] += 2
        document.getElementById("pos" + a + b).className = boot
        this.sumBoot += 2
      }
    }
    else {
      alert("корабли закончилсь")
      let comp = this.arrComp
      this.randPosition(comp)
    }
  }
  // генерация рандомного массива с условиями соответствия короблям
  randPosition(arry) {
    let c = 0, e = 9
    let one = 4
    let double = 3
    let tre = 2
    let four = 1
    while (four > 0) {
      let row = this.createRandom(c, 4)
      let pos = this.createRandom(c, 4)
      if (arry[row][pos] == 0 && arry[row][pos + 1] == 0 && arry[row + 1][pos] == 0 && arry[row][pos + 2] == 0 && arry[row][pos + 3] == 0 && arry[row][pos + 4] == 0) {
        arry[row][pos] = 2
        arry[row][pos + 1] = 2
        arry[row][pos + 2] = 2
        arry[row][pos + 3] = 2

        four = 0
      }
      else if (arry[row][pos] == 0 && arry[row + 1][pos] == 0 && arry[row + 2][pos] == 0 && arry[row + 3][pos] == 0 && arry[row + 4][pos] == 0 && arry[row + 5][pos] == 0) {
        arry[row][pos] = 2
        arry[row + 1][pos] = 2
        arry[row + 2][pos] = 2
        arry[row + 3][pos] = 2
        four = 0
      }
    }
    while (tre > 0) {
      let row = this.createRandom(c, 4)
      let pos = this.createRandom(c, 4)
      if (arry[row][pos] == 0 && arry[row][pos + 1] == 0 && arry[row + 1][pos] == 0 && arry[row][pos + 2] == 0 && arry[row][pos + 3] == 0 && arry[row + 1][pos + 1] == 0 && arry[row][pos + 4] == 0) {
        arry[row][pos] = 2
        arry[row][pos + 1] = 2
        arry[row][pos + 2] = 2

        tre -= 1
      }
      else if (arry[row][pos] == 0 && arry[row + 1][pos + 1] == 0 && arry[row + 1][pos] == 0 && arry[row + 2][pos] == 0 && arry[row + 3][pos] == 0 && arry[row + 4][pos] == 0 && arry[row + 5][pos] == 0) {
        arry[row][pos] = 2
        arry[row + 1][pos] = 2
        arry[row + 2][pos] = 2
        tre -= 1
      }
    }
    while (double > 0) {
      let row = this.createRandom(1, e)
      let pos = this.createRandom(c, e)
      if (arry[row][pos] == 0 && arry[row - 1][pos] == 0 && arry[row - 1][pos + 1] == 0 && arry[row][pos + 1] == 0 && arry[row][pos + 2] == 0 && arry[row + 1][pos] == 0 && arry[row][pos + 2] == 0) {
        arry[row][pos] = 2
        arry[row][pos + 1] = 2
        double--
      }
    }
    while (one > 0) {
      let row = this.createRandom(1, e)
      let pos = this.createRandom(1, e)
      if (arry[row][pos] == 0 && arry[row + 1][pos] == 0 && arry[row][pos - 1] == 0 && arry[row - 1][pos] == 0 && arry[row][pos + 1] == 0) {
        arry[row][pos] = 2
        one--
      }
    }
  }
  delay(f, ms) {
    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    }
  }
  moveComp() {    //генерация ходов компа
    let boom = this.state.addClassN[2]
    let flub = this.state.addClassN[3]
    let row = this.createRandom(0, 9)
    let block = this.createRandom(0, 9)
    if (this.playerCount > 1) {
      if (this.arrPlayer[row][block] == 2) {  // попадание
        this.setState(({ real }) => ({ real: real = 1 }))
        this.arrPlayer[row][block] = 1
        document.getElementById("pos" + row + block).className = boom
        this.playerCount -= 2
        if (this.arrPlayer[row][block + 1] == 2) {  //повторное попадание
          let nBlock = block + 1
          this.arrPlayer[row][block + 1] = 1
          document.getElementById("pos" + row + nBlock).className = boom
          this.playerCount -= 2
        }
      }
      if (this.arrPlayer[row][block] == 0) {
        this.arrPlayer[row][block] -= 0
        document.getElementById("pos" + row + block).className = flub
        this.setState(({ real }) => ({ real: real = 0 })) //промах
      }
    }
    else {
      // alert("you is fall")
      this.setState(({ real }) => ({ real: real = 3 }))
    }
  }
  killPosition(a, b) {    //выстрел по противнику
    let boom = this.state.addClassN[2]
    let flub = this.state.addClassN[3]
    if (this.enemyCount > 0) {
      if (this.arrComp[a][b] == 2) {
        this.arrComp[a][b] = 1
        document.getElementById("posC" + a + b).className = boom
        this.enemyCount -= 2
        this.setState(({ real }) => ({ real: real = 0 }))
      }
      else if (this.arrPlayer[a][b] != 1) {
        this.arrComp[a][b] = 0
        document.getElementById("posC" + a + b).className = flub
        this.setState(({ real }) => ({ real: real = 1 }))
        // this.delay(this.moveComp(), 700)//задержка для реалистичности, не очень удобно при ускорерии хдов
        this.moveComp()
      }
    }
    else {
      alert("you vin")
      this.setState(({ real }) => ({ real: real = 2 }))
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.statusGame[this.state.real]} className="hod" id="hod" />
        < div className="container">
          <div className="field__main">
            <React.Fragment>
              <table>
                <tbody>
                  {
                    this.arrPlayer.map((numList, i) => (
                      <tr key={i}>
                        {
                          numList.map((num, j) =>
                            <td key={j}>
                              <button onClick={this.rez == true ? () => this.autoPosition(i, j) : () => this.delay(this.clickPosition(i, j), 1500)} className={this.state.addClassN[0]} id={"pos" + i + j}></button>
                            </td>
                          )
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </React.Fragment>
          </div>
          <div className="field__main">
            <React.Fragment>
              <table>
                <tbody>
                  {
                    this.arrComp.map((numList, i) => (
                      <tr key={i}>
                        {
                          numList.map((num, j) =>
                            <td key={j}>
                              <button onClick={this.playerCount != 0 ? () => this.killPosition(i, j) : 0} className={this.state.addClassN[0]} id={"posC" + i + j}></button>
                            </td>
                          )
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

