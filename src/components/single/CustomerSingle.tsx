import "./single.scss";

type Props = {
  id: string;
  title: string;
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">

      <div className="activities">
        <h2>Tình trạng vận chuyển</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
