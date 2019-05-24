import luma from './index'
import {equal} from 'assert'
equal(luma('#0c76fb'), 0.40)
equal(luma('#d15ad0'), 0.55)
equal(luma('#7887fb'), 0.56)
equal(luma(0xffffff), 1)
equal(luma(0x000000), 0)
equal(luma('0c76fb'), 0.40)
equal(luma('d15ad0'), 0.55)
equal(luma('7887fb'), 0.56)
equal(luma('ffffff'), 1)
equal(luma(0), 0)
console.log('Pass')
