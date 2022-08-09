import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";
import {
	AppContainer,
	Clock,
	Hours,
	Minutes,
	Seconds,
	Semicircle,
} from "./styled";
import { IClockProps } from "./styled";
import { Dropdown } from "./components/Dropdown";

export const App = () => {
	const [time, setTime] = useState<IClockProps>({
		hour: 0,
		minute: 0,
		seconds: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			console.log(time);

			if (time.hour >= 24) {
				setTime({ ...time, hour: 1 });
			}
			if (time.minute >= 60) {
				setTime({
					...time,
					minute: 1,
					hour: time.hour + 1,
				});
			}
			if (time.seconds >= 60) {
				setTime({
					...time,
					seconds: 1,
					minute: time.minute + 1,
				});
			}
			if (time.seconds < 60) {
				setTime({ ...time, seconds: time.seconds + 1 });
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	useEffect(() => {
		axios
			.get("/api/Time/current/zone", {
				params: {
					timeZone: "Asia/Ashgabat",
				},
			})
			.then((response) => {
				const { hour, minute, seconds } = response.data;
				setTime({ hour, minute, seconds });
			});
	}, []);

	return (
		<AppContainer>
			<Dropdown />
			<Clock>
				<Hours time={time} />
				<Minutes time={time} />
				<Seconds time={time} />
			</Clock>
			<Semicircle />
		</AppContainer>
	);
};

export default App;
