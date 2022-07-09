import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

interface TodoItemProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onDelete: () => void;
}

export function TodoItem({
  title,
  checked,
  onDelete,
  onChange,
}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleCheckTodo() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  }

  return (
    <div className="flex flex-1 border-[1px] rounded-lg border-gray-400 bg-gray-500 p-4 gap-2">
      <label className="flex flex-1 gap-3 cursor-pointer group">
        <input
          type="checkbox"
          onChange={handleCheckTodo}
          checked={isChecked}
          className="bg-red-400"
          hidden
        />
        {isChecked ? (
          <CheckCircle
            className="rounded-full text-purple-700 group-hover:text-purple-500 transition-colors"
            weight="bold"
            size={24}
          />
        ) : (
          <Circle
            className="text-blue-500 group-hover:text-blue-700 transition-colors"
            weight="bold"
            size={24}
          />
        )}
        <span
          className={`w-full text-sm ${
            isChecked ? "line-through text-gray-300" : "text-gray-100"
          } `}
        >
          {title}
        </span>
      </label>
      <Trash
        onClick={onDelete}
        size={28}
        className="text-gray-300 hover:bg-gray-400 hover:text-danger hover:rounded p-1 cursor-pointer transition-colors"
      />
    </div>
  );
}
