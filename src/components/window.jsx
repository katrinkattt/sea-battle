import React from 'react';

const start = document.getElementById('start')
function clickStart() {
    const player = document.getElementById('player').value
    const enemy = document.getElementById('enemy').value
    // return(player, enemy)
}
export default function Window(props) {
    return (
        <div id="window" className="modal__main">
            <div className="modal__title">
                <div className="modal__text__title">{props.title}</div>
                <div id="btnClose" className="modal__close">
                    <div className="modal__close__line">
                    </div>
                    <div className="modal__close__line1"></div>
                </div>
            </div>
            <div className="modal__text">
                {/* <form> */}
                <label for="player">Ваше имя</label>
                <input type="text" id="player" placeholder="Представьтесь" className="input__name" />
                <label for="enemy">Назовите противника</label>
                <input type="text" id="enemy" placeholder="Назовите противника" className="input__name" />
                <div>
                    <input type="checkbox" class="" id="hand" />
                    <label class="form-check-label" for="hand">Расставить корабли в ручную</label>
                    <input type="checkbox" class="" id="auto" />
                    <label class="" for="auto">Расставить автоматически</label>
                </div>
                <div>
                    <button id="start" onClick={clickStart} class="btn">Начать</button>
                </div>
                {/* </form> */}
            </div>
            <div className="modal__footer"></div>
        </div>
    )
}