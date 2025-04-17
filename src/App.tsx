import "./styles.css";
import { useState, useEffect } from "react";
import UserCard from "././components/UserCard";
import Pagination from "././components/Pagination";
export default function App() {
  const [products, setProducts] = useState();
  const [currentPage, setCurrentpage] = useState(0);

  const PAGE_SIZE = 10;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users?limit=500");
    const json = await data.json();
    setProducts(json.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalUsers = products && products.length;
  const totalPages = Math.ceil(totalUsers / PAGE_SIZE);
  const startPage = currentPage * PAGE_SIZE;
  const endPage = startPage + PAGE_SIZE;

  return !products?.length ? (
    <h3>No Users Found</h3>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination
        setCurrentpage={setCurrentpage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <div className="user-container">
        {products.slice(startPage, endPage).map((res) => (
          <UserCard
            key={res.id}
            firstName={res?.firstName}
            lastName={res?.lastName}
            image={res?.image}
            gender={res?.gender}
            age={res?.age}
          />
        ))}
      </div>
    </div>
  );
}
