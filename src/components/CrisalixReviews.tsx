
import { useEffect } from 'react';

export default function CrisalixReview() {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://pro.crisalix.com/reviews_widget.js?token=2379a86041267a9ec5136088effaab73&type=review_carousel&selector=crisalix_widget_wrap_3dbad16a';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="crisalix-review px-6 lg:px-14 py-6 pb-14 lg:py-12 ">
			<div className="crisalix_widget_wrap_3dbad16a" />
		</div>
	);
}