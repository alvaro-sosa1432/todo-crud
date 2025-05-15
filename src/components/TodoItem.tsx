interface IProps {
  title: string;
  description: string;
  isCompleted: boolean;
}

export const TodoItem = ({ title, description, isCompleted }: IProps) => {
  return (
    <div className="flex p-6 justify-evenly  bg-blue-300 rounded-md ">
      <input type="checkbox" checked={isCompleted} />
      <div className="mx-auto">
        <h4 className="text-3xl">{title}</h4>
        <p>{description}</p>
      </div>
      <div className="flex gap-5">
        <button className="bg-blue-600 px-3 rounded-md hover:cursor-pointer active:scale-90">
          Crear
        </button>
        <button className="bg-red-500 px-3 rounded-md hover:cursor-pointer active:scale-90 ">
          Borrar
        </button>
      </div>
    </div>
  );
};
