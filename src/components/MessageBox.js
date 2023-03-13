import { Link } from "react-router-dom";

export const MessageBox = ({ message }) => {
  return (
    <div class="h-10 p-2 flex justify-between items-center bg-pale-green">
      <p class="italic">
        <Link to="/complete-profile" class="text-gray-800">
          Click here
        </Link>{" "}
        to finish completing your profile
      </p>
      <p class="font-bold">X</p>
    </div>
  );
};
