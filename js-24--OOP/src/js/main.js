const log = console.log

class Device {
    constructor(veigh, energyAmount) {
        this.veigh = veigh;
        this.energyAmount = energyAmount;
    }
    getEnergyAmount() {
        return this.energyAmount
    }
}

const device = new Device(10, 10)
log ( device.getEnergyAmount() )

class Robot extends Device {
    constructor(name, color) {
        super(100, 1000)
        this.name = name
        this.color = color
        this.link = document.createElement('div')
        this.link.classList.add('robot')
        this.link.style.background = color
        document.body.appendChild(this.link)
    }
    move(to) {
        if (to == 'right') this.link.style.left = '100px'
        if (to == 'down') this.link.style.top = '100px'
    }
    getEnergyAmount() {
        console.log('Rrrrr')
        return super.getEnergyAmount()
    }
}

const units = [
    new Robot('001', 'red'),
    new Robot('002', 'green')
]

units[0].move('right')
units[0].move('down')

units[1].move('right')

log(
    units[1].getEnergyAmount()
)




