/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  users: any[];
}

export const UserList = ({ users }: Props) => {
  if (!users.length) {
    return (
      <div
        className="p-4 mb-4 mt-8 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-center"
        role="alert"
      >
        <span className="font-medium" aria-label="userssnotfound">
          No hay usuarios en la lista!
        </span>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg container flex justify-center">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.sys.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {`${user.fields.name} ${user.fields.lastName}`}
              </td>
              <td className="px-6 py-4">{user.fields.email}</td>
              <td className="px-6 py-4">
                {user.fields.isActive ? "Activo" : "Inactivo"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
