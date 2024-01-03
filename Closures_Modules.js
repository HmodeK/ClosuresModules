console.log("****************************************************************** Exercise 1 ***************************************************************************")

const StringFormatter = () => {
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
  
    const toSkewerCase = (str) => {
      return str.replace(/\s+/g, '-');
    };
  
    return {
      capitalizeFirst,
      toSkewerCase,
    };
  };
  
  const formatter = StringFormatter();
  
  console.log(formatter.capitalizeFirst("dorothy")); 
  console.log(formatter.toSkewerCase("blue box")); 
  

  console.log("****************************************************************** Exercise 2 ***************************************************************************")
 
  const Bank = () => {
    let money = 500;
  
    const depositCash = (cash) => {
      money += cash;
    };
  
    const showBalance = () => {
      console.log(money);
    };
  
    return {
      deposit: depositCash,
      showBalance,
    };
  };
  
  const bank = Bank();
  bank.deposit(200);
  bank.deposit(250);
  bank.showBalance(); // should print 950
  

  console.log("****************************************************************** Exercise 3 ***************************************************************************")
  
  
  const SongsManager = () => {
    const songs = {};
  
    const addSong = (name, url) => {
      const videoId = url.split('v=')[1];
      songs[name] = videoId;
    };
  
    const getSong = (name) => {
      const videoId = songs[name];
      if (videoId) {
        return `https://www.youtube.com/watch?v=${videoId}`;
      } else {
        return `Song not found`;
      }
    };
  
    return {
      addSong,
      getSong,
    };
  };
  
  // Example usage:
  const songsManager = SongsManager();
  songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
  songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
  songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");
  
  console.log(songsManager.getSong("sax")); 
  console.log(songsManager.getSong("how long")); 
  console.log(songsManager.getSong("nonexistent")); 
  
  
  
  
  
  
  
  
  

