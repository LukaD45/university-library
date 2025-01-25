import { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicler = ({ value, onPickerChange }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <HexColorPicker color={value} onChange={onPickerChange} />;
};

export default ColorPicler;
