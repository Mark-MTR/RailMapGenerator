import { RMGStation, IntInfoTag, InterchangeInfo } from './Station';
import { ID, Name, BranchInfo, StationInfo, getIntBoxGZ } from '../utils';

class RMGStationGZ extends RMGStation {
    constructor(id: ID, data: StationInfo) {
        super(id, data);
        this.stnNum = data.num;
    }

    get nameClass() {
        switch (this.state) {
            case -1:
                return 'Pass';
            case 0:
                return 'CurrentGZ';
            default:
                return 'Future';
        }
    }

    get _nameShift() {return false;}
    get _tickRotation() {return this.y > 0 ? 180 : 0;}

    get iconHTML() {
        var [iconType, numClass] = (this.state == -1) ? ['stn_gz_pass','Pass'] : ['stn_gz','Future'];
        return $('<g>', { transform:`translate(${this.x},${this.y})` })
            .append($('<use>', { 'xlink:href': '#' + iconType, class: 'rmg-stn' }))
            .append(
                $('<g>', { class: 'Name ' + numClass })
                    .append($('<text>', { class:'rmg-name__zh rmg-name__gzmtr--line-num' }))
                    .append($('<text>', { class:'rmg-name__zh rmg-name__gzmtr--station-num', x:0 }).text(this.stnNum))
            );
    }

    get nameHTML() {
        var nameENLn = this.name[1].split('\\').length;
        let dx: number;
        if (this._nameShift) {
            dx = this._tickRotation === 0 ? -9 : 16 + (nameENLn-1)*12 * Math.cos(-45);
        } else {
            dx = this._tickRotation === 0 ? (24 + (nameENLn-1)*12) * Math.cos(-45) : -6;
        }
        // let dx = this._nameShift ? -8 : (24 + (nameENLn-1)*12) * Math.cos(-45);
        let dy = this._tickRotation === 0 ? (-4 - 21.921875 - (nameENLn-1)*12*Math.cos(-45)) : 17.5;
        // var dy = (-4 - 21.921875 - (nameENLn-1)*12*Math.cos(-45)) * (this._tickRotation === 0 ? 1 : -1);
        return $('<g>', {
            'transform': `translate(${this.x - dx},${this.y + dy})rotate(-45)`, 
            'text-anchor': this._tickRotation === 0 ? 'start' : 'end', 
            class: `Name ${this.nameClass}`
        }).append(
            $('<text>').addClass('rmg-name__zh rmg-name__gzmtr--station').text(this.name[0])
        ).append(
            $('<text>', {
                dy: 15, class: 'rmg-name__en rmg-name__gzmtr--station'
            }).text(this.name[1].split('\\')[0]).append(
                $('<tspan>', {
                    'x': 0, 'dy': 10, class: 'rmg-name__en rmg-name__gzmtr--station'
                }).text(this.name[1].split('\\')[1])
            )
        );
    }
}

class IntStationGZ extends RMGStationGZ {
    private _intInfos: InterchangeInfo[];

    constructor(id: ID, data: StationInfo) {
        super(id, data);
        this._intInfos = data.transfer.info[0];
    }

    // get _tickRotation() {return 0;}

    get intTickHTML() {
        var ticks = this._intInfos
                        .map(info => info[IntInfoTag.colour])
                        .map((colour,idx) => {
                            let x = this.x - 2*(this._intInfos.length-1) + 4*idx;
                            return $('<use>', {
                                'xlink:href': '#inttick_gz', 
                                stroke: this.state==-1 ? '#aaa' : colour, 
                                transform: `translate(${x},${this.y})rotate(${this._tickRotation})`
                            });
                        });
        return $('<g>', {class:'rmg-line rmg-line__gzmtr rmg-line__change'})
                    .append(...ticks);
    }

    get intNameHTML() {
        let intBoxEls = this._intInfos.map(info => getIntBoxGZ(info, this.state));
        intBoxEls.forEach((el, i) => {
            $(el).attr('transform', `translate(0,${i*28 * (this._tickRotation===0 ? 1 : -1)})`);
        });

        return $('<g>', {
            'text-anchor': 'middle', 
            transform: `translate(${this.x},${this.y + (this._tickRotation === 0 ? 23 : -47)})`
        }).append(...intBoxEls);
    }

    get ungrpHTML() {
        return [this.intTickHTML, this.iconHTML, this.nameHTML, this.intNameHTML];
    }
}

class BranchStationGZ extends IntStationGZ {
    constructor (id: ID, data: StationInfo, lineInf) {
        data.transfer.info[0].unshift(lineInf);
        if (data.transfer.info[1]) {
            data.transfer.info[0].push(...data.transfer.info[1]);
        }
        super(id, data);
    }

    get _nameShift() {return true;}
    get _tickRotation() {
        return (this.parents.indexOf(this.branch.left[1]) === 0 || this.children.indexOf(this.branch.right[1]) === 0) ? 0 : 180;
    }
}

class OSIStationGZ extends IntStationGZ {
    constructor (id: ID, data: StationInfo) {
        // data.transfer.info[0].push(...data.transfer.info[1]);
        super(id, data);
    }
}

export { RMGStationGZ, IntStationGZ, BranchStationGZ, OSIStationGZ };