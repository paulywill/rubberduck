import React, { Fragment, useEffect, useState } from 'react';

const App = () => {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        console.log(data);
        setLoading(false);
        setDuck(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [duck, setDuck] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>
      <h1>Duck Home</h1>

      <div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            {duck.map((data) => (
              <div key={data._id}>
                <ul>
                  <li>
                    <h1>
                      <a href="/{data.id}">{data.user}</a>
                    </h1>
                  </li>
                  <li>
                    <p>{data.problem}</p>
                  </li>
                  <li>
                    <p>{data.goal}</p>
                  </li>
                  <li>
                    <p>{data.steps}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1>Add New Duck</h1>
        <form method="POST" action="http://localhost:8080/add-duck">
          <div>
            <label>User</label>
            <input type="text" name="user" required />
          </div>
          <div>
            <label>Problem</label>
            <input type="text" name="problem" required />
          </div>
          <div>
            <label>Goal</label>
            <input type="text" name="goal" required />
          </div>
          <div>
            <label>Steps</label>
            <input type="text" name="steps" required />
          </div>

          <div>
            <button type="submit">Add Duck</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default App;