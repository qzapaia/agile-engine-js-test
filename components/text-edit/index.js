import ContentEditable from "react-contenteditable";
import PopoverMenu from "./popover-menu";
import MyBoldFormatter from "../my-bold-formatter";
import { withState } from "recompose";

const clickHandler = props => () => {
  const selection = window.getSelection().getRangeAt(0);
  const showSelectionMenu = !selection.collapsed && selection.toString().trim();
  if (showSelectionMenu) {
    const { x, y, height } = selection.getBoundingClientRect();

    props.showSelectionMenu({
      top: y + height,
      left: x
    });
  } else {
    props.showSelectionMenu(false);
  }
};

export const TextEdit = props => {
  const { value, onChange, selectionMenuOptions, options=[] } = props;

  return (
    <div>
      <PopoverMenu
        value={value}
        show={selectionMenuOptions}
        options={[MyBoldFormatter, ...options]}
      />
      <ContentEditable
        html={value}
        onChange={onChange}
        onClick={clickHandler(props)}
      />
    </div>
  );
};

export default withState("selectionMenuOptions", "showSelectionMenu", false)(
  TextEdit
);
