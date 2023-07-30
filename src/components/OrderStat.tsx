import { North, South } from "@mui/icons-material";

import styles from "./OrderStat.module.scss";

type DataProps = {
  title: string;
  arrowIcon: string;
  percentage: number;
  percentageColor: string;
  icon: string;
  iconBg: string;
  total: number;
  isMoney: boolean;
};

const getArrowIcon = (iconName: string) => {
  if (iconName === "North") return <North fontSize="small" />;
  if (iconName === "South") return <South fontSize="small" />;
};

const OrderStat = (props: DataProps) => {
  return (
    <div className={styles.widget}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2>{props.title}</h2>
        </div>

        <div
          className={styles.right}
          style={{ color: `${props.percentageColor}` }}
        >
          {getArrowIcon(props.arrowIcon)}
          {props.percentage}%
        </div>
      </div>

      <div className={styles.bottom}>
        <div
          className={styles.widgetIcon}
          style={{ background: `${props.iconBg}` }}
        >
          <img
            src={new URL(`../assests/${props.icon}`, import.meta.url).href}
            alt="widget_icon"
          />
        </div>

        <div className="count">
          <h1>
            {props.isMoney && "$"}
            {props.total}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OrderStat;
