

import { useEffect } from 'react';

export default function CrisalixHeader() {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://pro.crisalix.com/reviews_widget.js?token=2379a86041267a9ec5136088effaab73&type=micro_review_count&selector=crisalix_widget_wrap_7a906d40';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className="crisalix-header">
			<div className="crisalix_widget_wrap_7a906d40" />
		</div>
	);
}