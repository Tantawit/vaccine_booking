import styles from "./home.module.css";

export default function VaccineInfo() {
  return (
    <div className="mt-[100px] bg-gray-500">
      <h2 className={styles.vaccine_info_title}>
        <br />
        <br />
        <div className="text-4xl font-medium text-gray-200">
          What is Healthy Teeth?
        </div>
      </h2>
      <div className={styles.vaccine_info_container}>
        <img src="/smiling-monk.jpg" className={styles.hospital_image} />
        <h4 className="text-gray-200 my-[180px] mx-[70px]">
          A healthy dental routine serves as a cornerstone in oral care, akin to
          a vaccine in modern medicine. It's a strategic regimen designed to
          fortify your teeth against potential issues. By practicing regular
          brushing, flossing, and dental check-ups, you provide your teeth with
          the essential defenses they need. These habits work like a shield,
          preventing the buildup of harmful bacteria and ensuring your gums and
          enamel remain robust. Just as vaccines protect against diseases, a
          consistent oral care routine safeguards your smile, contributing not
          only to personal well-being but also to the overall health of our
          dental community.
        </h4>
      </div>
    </div>
  );
}
