import Storie from "./Storie";

const storieData = [
    {
		image: "https://picsum.photos/id/1008/56",
		name: "John Stone",
		id: 1
	},
    {
		image: "https://picsum.photos/id/1009/56",
		name: "Ponnappa",
		id: 2
	},
    {
		image: "https://picsum.photos/id/1010/56",
		name: "Mia Wong",
		id: 3
	},
    {
		image: "https://picsum.photos/id/1011/56",
		name: "Peter Mee",
		id: 4
	},
    {
		image: "https://picsum.photos/id/1012/56",
		name: "Natalie",
		id: 5
	},
    {
		image: "https://picsum.photos/id/1013/56",
		name: "Ang Li",
		id: 6
	},
    {
		image: "https://picsum.photos/id/1014/56",
		name: "Nguta Ithya",
		id: 7
	},
    {
		image: "https://picsum.photos/id/1015/56",
		name: "Tamzyn Fre",
		id: 8
	},
    {
		image: "https://picsum.photos/id/1016/56",
		name: "Trevor",
		id: 9
	}
];

export default function Stories(){
    return(
        <div className="stories">
            {storieData.map((data) => <Storie key={data.id} urlImage = {data.image} name = {data.name} />)}
        </div>
    );
}