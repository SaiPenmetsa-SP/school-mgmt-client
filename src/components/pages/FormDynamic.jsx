const FormDynamic = ({ eachItem }) => {
  // const { id, student_name } = eachItem;
  return (
    <div>
      <ul key={eachItem.id} className="flex justify-center text-center">
        <li className="w-[40%] bg-gray-200 border-b-2 border-white">
          {eachItem.id}
        </li>
        <li className="w-[40%] bg-gray-200 border-b-2 border-white">
          {eachItem.student_name}
        </li>
      </ul>
    </div>
  );
};

export default FormDynamic;
