import './style.css'
import { Niivue, NVImage, SHOW_RENDER } from '@niivue/niivue'

async function main() {
  sliceType.onchange = function () {
    let st = parseInt(this.value)
    nv.setSliceType(st)
  }
  const nv = new Niivue({ show3Dcrosshair: true, backColor: [0.1, 0.1, 0.2, 1] })
  await nv.attachTo("gl")
  nv.opts.multiplanarShowRender = SHOW_RENDER.ALWAYS;
  sliceType.onchange()
  await nv.loadVolumes([{url: './mybrain.nii.gz'}])
}

main();