import {PopoverMenu} from "./styled"

export default ({options, show, value}) => (
  <PopoverMenu show={show}>
    {options.map(o=>{
      const [OptionButton] = o;
      return <OptionButton value={value} onApply={()=>{}} />
    })}
  </PopoverMenu>
)