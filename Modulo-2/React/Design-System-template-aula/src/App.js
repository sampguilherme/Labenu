import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from './componentes/Card'
import Card2 from './componentes/Card2'

export default function App() {
  const [users, setUsers] = useState([]);

  console.log(users)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <Flex gap={'16px'} wrap={'wrap'}>
        {users && users.map((user) => {
          return <Card2 key={user.id} user={user}/>
        })}
      </Flex>
    </ChakraProvider>
  );
}
