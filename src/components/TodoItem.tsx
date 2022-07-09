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
    <div className="flex flex-1 items-center border-[1px] rounded-lg border-gray-400 bg-gray-500 p-4">
      <label className="flex flex-1 items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          onChange={handleCheckTodo}
          checked={isChecked}
          className="bg-red-400"
          hidden
        />
        {isChecked ? (
          <CheckCircle
            className="bg-gray-100 rounded-full text-purple-700"
            weight="fill"
            size={24}
          />
        ) : (
          <Circle className="text-blue-500" size={24} />
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
        size={24}
        className="text-gray-300 hover:bg-gray-400 hover:text-danger hover:rounded p-1 cursor-pointer"
      />
    </div>
  );
}
