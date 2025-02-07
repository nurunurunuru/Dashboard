export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "city",
    headerName: "city",
    width: 130,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.phone}`}>
          {params.row.phone}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id:	1,
name:	"Leanne Graham",
username:	"Bret",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Sincere@april.biz",
city	:"Gwenborough",
phone	:"1-770-736-8031",
  },
  {
    id: 2,
    name:	"Ervin Howell",
username:	"Antonette",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Shanna@melissa.tv",
city	:"Wisokyburgh",
phone	:"1-770-736-8031",
  },
  {
    id: 3,
    name:	"Clementine Bauch ",
username:	"Samantha",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Nathan@yesenia.net",
city	:"McKenziehaven",
phone	:"1-770-736-8031",
  },
  {
    id: 4,
    name:	"Patricia Lebsack ",
username:	"Karianne",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Julianne.OConner@kory.org",
city	:"South Elvis",
phone	:"1-770-736-8031",
  },
  {
    id: 5,
    name:	"Chelsey Dietrich ",
username:	"Kamren",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Lucio_Hettinger@annie.ca",
city	:"Roscoeview",
phone	:"1-770-736-8031",
  },
  {
    id: 6,
    name:	"Mrs. Dennis Schulist",
username:	"Leopoldo_Corkery",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Karley_Dach@jasper.info",
city	:"South Christy",
phone	:"1-770-736-8031",
  },
  {
    id: 7,
    name:	"Kurtis Weissnat",
username:	"Elwyn.Skiles",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Telly.Hoeger@billy.biz",
city	:"Howemouth",
phone	:"1-770-736-8031",
  },
  {
    id: 8,
    name:	"Nicholas Runolfsdottir V",
username:	"Maxime_Nienow",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Sherwood@rosamond.me",
city	:"Aliyaview",
phone	:"1-770-736-8031",
  },
  {
    id: 9,
    name:	"Glenna Reichert",
username:	"Delphine",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Chaim_McDermott@dana.io",
city	:"Bartholomebury",
phone	:"1-770-736-8031",
  },
  {
    id: 10,
    name:	"Clementina DuBuque ",
username:	"Moriah.Stanton",
img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
email:	"Rey.Padberg@karina.biz",
city	:"Lebsackbury",
phone	:"1-770-736-8031",
  },
];


