import data from "../data.json";
import OrderStat from "./OrderStat";

import styles from "./WidgetOrderStats.module.scss";

const WidgetOrderStats = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <OrderStat {...data.revenue} />
        <OrderStat {...data.orders} />
        <OrderStat {...data.dineIn} />
        <OrderStat {...data.takeAway} />
      </main>
    </div>
  );
};

export default WidgetOrderStats;
