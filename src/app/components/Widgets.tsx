import { ContactUserInfo } from '../components/ContactUserTile';
export default function Widgets() {
    const userCount = 20;  // Number of user profiles
    const ids = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ];
    const names = [
      "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah",
      "Ivy", "Jack", "Karen", "Leo", "Mona", "Nina", "Oscar", "Paul", "Quincy",
      "Rita", "Sam", "Tina"
    ];
    
    // Example image paths for users (in a real-world scenario, you would replace these with actual image URLs)
    const imgPaths = [
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
      "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    ];
    
    // Generate an array of UserInfo components dynamically
    const contactUserInfoList = [...Array(userCount)].map((_, index) => (
      <ContactUserInfo 
        key={index} 
        id = {ids[index % names.length]} 
        name={names[index % names.length]} 
        imgPath={imgPaths[index % imgPaths.length]}  
      />
    ));

  return (
    <div className="bg-gray-100 p-4 w-1/4 h-screen">
      <h3 className="font-bold mb-4">Contacts</h3>
      <div className="bg-white p-4 rounded-lg shadow mb-4"> 
        <div>
          <text>Contacts</text>
        </div>
        <div className='users' style={{maxWidth:"250"}}>{contactUserInfoList}</div>
        <style> {  `.users {
        display: flex;
        flex-wrap: wrap;  
        gap: 10px;`}
        </style>
      </div>   
    </div>      
  );
}
