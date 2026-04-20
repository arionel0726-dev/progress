type CertificateProps = {
	name: string
	completedSteps?: number
	totalSteps?: number
}

export function Certificate({
	name,
	completedSteps = 15,
	totalSteps = 15
}: CertificateProps) {
	const date = new Date().toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})

	const phases = [
		{ color: '#7fff9e' },
		{ color: '#5dd4a4' },
		{ color: '#60a5fa' },
		{ color: '#a78bfa' },
		{ color: '#f472b6' }
	]

	const cornerSvg = (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
		>
			<path
				d="M8 40 L8 8 L40 8"
				stroke="rgba(127,255,158,0.2)"
				strokeWidth="1"
				fill="none"
			/>
			<path
				d="M8 8 L16 8"
				stroke="rgba(127,255,158,0.5)"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M8 8 L8 16"
				stroke="rgba(127,255,158,0.5)"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	)

	return (
		<div
			id="certificate"
			style={{
				width: '800px',
				background: '#0e0e0f',
				borderRadius: '20px',
				padding: '52px 64px',
				textAlign: 'center',
				position: 'relative',
				overflow: 'hidden',
				border: '1px solid rgba(255,255,255,0.08)',
				fontFamily: "'Onest', sans-serif",
				WebkitFontSmoothing: 'antialiased'
			}}
		>
			{/* Ambient glow top */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(ellipse 60% 40% at 50% -10%, rgba(127,255,158,0.06) 0%, transparent 70%)',
					pointerEvents: 'none'
				}}
			/>

			{/* Bottom edge fade */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '60%',
					height: '1px',
					background:
						'linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)'
				}}
			/>

			{/* Corners */}
			{[
				{ top: 18, left: 18 },
				{ top: 18, right: 18, transform: 'scaleX(-1)' },
				{ bottom: 18, left: 18, transform: 'scaleY(-1)' },
				{ bottom: 18, right: 18, transform: 'scale(-1)' }
			].map((style, i) => (
				<div
					key={i}
					style={{ position: 'absolute', width: 48, height: 48, ...style }}
				>
					{cornerSvg}
				</div>
			))}

			{/* Eyebrow */}
			<div
				style={{
					fontSize: 10,
					letterSpacing: '0.18em',
					textTransform: 'uppercase',
					color: '#5a5856',
					fontWeight: 500,
					marginBottom: 28
				}}
			>
				Certificate of Completion
			</div>

			{/* Seal */}
			<div
				style={{
					width: 44,
					height: 44,
					borderRadius: '50%',
					border: '1.5px solid rgba(127,255,158,0.35)',
					background: 'rgba(127,255,158,0.07)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '0 auto 28px'
				}}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M10 2L12.2 7.6L18 8.2L13.8 12.2L15 18L10 15L5 18L6.2 12.2L2 8.2L7.8 7.6L10 2Z"
						stroke="#7fff9e"
						strokeWidth="1.2"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			{/* Presented to */}
			<p
				style={{
					fontSize: 12,
					color: '#5a5856',
					fontWeight: 300,
					marginBottom: 10,
					letterSpacing: '0.04em'
				}}
			>
				настоящим подтверждается, что
			</p>

			<h2
				style={{
					fontFamily: "'Instrument Serif', serif",
					fontStyle: 'italic',
					fontSize: 38,
					color: '#f0eee8',
					lineHeight: 1.1,
					marginBottom: 10,
					fontWeight: 400,
					letterSpacing: '-0.01em'
				}}
			>
				{name}
			</h2>

			<p
				style={{
					fontSize: 12,
					color: '#5a5856',
					fontWeight: 300,
					marginBottom: 16,
					letterSpacing: '0.04em'
				}}
			>
				успешно завершил роадмап
			</p>

			<h3
				style={{
					fontFamily: "'Instrument Serif', serif",
					fontSize: 20,
					color: '#d4d0c8',
					fontWeight: 400,
					marginBottom: 32,
					lineHeight: 1.3
				}}
			>
				2D Concept Artist — 18 месяцев
			</h3>

			{/* Divider */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 14,
					margin: '0 auto 24px',
					maxWidth: 300
				}}
			>
				<div
					style={{
						flex: 1,
						height: '0.5px',
						background: 'rgba(255,255,255,0.08)'
					}}
				/>
				<div
					style={{
						width: 4,
						height: 4,
						borderRadius: '50%',
						background: 'rgba(127,255,158,0.4)'
					}}
				/>
				<div
					style={{
						flex: 1,
						height: '0.5px',
						background: 'rgba(255,255,255,0.08)'
					}}
				/>
			</div>

			{/* Phase pips */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: 5,
					marginBottom: 28
				}}
			>
				{phases.map((p, i) => (
					<div
						key={i}
						style={{
							width: 28,
							height: 3,
							borderRadius: 99,
							background: p.color
						}}
					/>
				))}
			</div>

			{/* Meta */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: 36,
					marginBottom: 36
				}}
			>
				{[
					{ label: 'Фазы', value: '5 из 5' },
					{ label: 'Дата', value: date },
					{ label: 'Шагов', value: `${completedSteps} из ${totalSteps}` }
				].map((item, i) => (
					<div
						key={i}
						style={{ textAlign: 'center' }}
					>
						<div
							style={{
								fontSize: 10,
								color: '#3d3b38',
								letterSpacing: '0.1em',
								textTransform: 'uppercase',
								fontWeight: 500,
								marginBottom: 4
							}}
						>
							{item.label}
						</div>
						<div style={{ fontSize: 12, color: '#8a8880', fontWeight: 400 }}>
							{item.value}
						</div>
					</div>
				))}
			</div>

			{/* Quote */}
			<p
				style={{
					fontFamily: "'Instrument Serif', serif",
					fontStyle: 'italic',
					fontSize: 14,
					color: '#3d3b38',
					letterSpacing: '0.01em'
				}}
			>
				"Дисциплина создаёт свободу."
			</p>
		</div>
	)
}
