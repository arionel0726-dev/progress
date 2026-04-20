import confetti from 'canvas-confetti'
import { toPng } from 'html-to-image'
import { useEffect, useRef } from 'react'
import { Certificate } from './Certificate'

type CompletionModalProps = {
	isOpen: boolean
	name: string
	onClose: () => void
}

export function CompletionModal({
	isOpen,
	name,
	onClose
}: CompletionModalProps) {
	const certificateRef = useRef<HTMLDivElement | null>(null)
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!isOpen || !canvasRef.current) return

		const canvas = canvasRef.current

		const myConfetti = confetti.create(canvas, {
			resize: true,
			useWorker: true
		})

		const timer = setTimeout(() => {
			myConfetti({
				particleCount: 160,
				spread: 100,
				startVelocity: 40,
				origin: { x: 0.5, y: 0.2 }
			})

			myConfetti({
				particleCount: 90,
				spread: 70,
				startVelocity: 35,
				origin: { x: 0.2, y: 0.25 }
			})

			myConfetti({
				particleCount: 90,
				spread: 70,
				startVelocity: 35,
				origin: { x: 0.8, y: 0.25 }
			})
		}, 250)

		return () => clearTimeout(timer)
	}, [isOpen])

	if (!isOpen) return null

	async function handleDownload() {
		if (!certificateRef.current) return

		try {
			const dataUrl = await toPng(certificateRef.current, {
				cacheBust: true,
				pixelRatio: 2
			})

			const link = document.createElement('a')
			link.download = 'arionel-roadmap-certificate.png'
			link.href = dataUrl
			link.click()
		} catch (error) {
			console.error('Ошибка скачивания сертификата:', error)
		}
	}

	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				background: 'rgba(0,0,0,0.82)',
				backdropFilter: 'blur(10px)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '24px',
				zIndex: 300
			}}
			onClick={onClose}
		>
			<div
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '1100px',
					maxHeight: '90vh',
					overflowY: 'auto',
					background: 'rgba(15,15,18,0.92)',
					border: '1px solid rgba(255,255,255,0.08)',
					borderRadius: '28px',
					padding: '28px',
					boxShadow: '0 30px 80px rgba(0,0,0,0.45)'
				}}
				onClick={e => e.stopPropagation()}
			>
				<canvas
					ref={canvasRef}
					style={{
						position: 'absolute',
						inset: 0,
						width: '100%',
						height: '100%',
						pointerEvents: 'none',
						zIndex: 2
					}}
				/>

				<div style={{ position: 'relative', zIndex: 3 }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: '16px',
							alignItems: 'flex-start',
							marginBottom: '24px'
						}}
					>
						<div>
							<p
								style={{
									margin: 0,
									fontSize: '12px',
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
									color: '#7d7d86'
								}}
							>
								Финал пути
							</p>

							<h2
								style={{
									margin: '8px 0 10px',
									fontSize: '32px',
									lineHeight: 1.1,
									color: '#f3f3f5'
								}}
							>
								Ты завершил roadmap
							</h2>

							<p
								style={{
									margin: 0,
									fontSize: '16px',
									color: '#aaaaaf',
									maxWidth: '760px',
									lineHeight: 1.7
								}}
							>
								Ты прошёл не просто список шагов. Ты доказал себе, что можешь
								двигаться долго, спокойно и до конца.
							</p>
						</div>

						<button
							type="button"
							onClick={onClose}
							style={{
								background: 'transparent',
								border: '1px solid rgba(255,255,255,0.08)',
								color: '#cfcfd5',
								borderRadius: '12px',
								padding: '10px 14px',
								cursor: 'pointer',
								flexShrink: 0
							}}
						>
							Закрыть
						</button>
					</div>

					<div
						style={{
							display: 'grid',
							gap: '18px',
							marginBottom: '24px'
						}}
					>
						<div
							style={{
								background: 'rgba(255,255,255,0.03)',
								border: '1px solid rgba(255,255,255,0.06)',
								borderRadius: '20px',
								padding: '18px 20px'
							}}
						>
							<div
								style={{
									fontSize: '12px',
									textTransform: 'uppercase',
									letterSpacing: '0.08em',
									color: '#7d7d86',
									marginBottom: '8px'
								}}
							>
								Сообщение себе
							</div>

							<p
								style={{
									margin: 0,
									color: '#e8e8ec',
									lineHeight: 1.8,
									fontSize: '15px'
								}}
							>
								Я дошёл до этого момента не случайно. Я заслужил этот результат
								своей дисциплиной, терпением и выбором продолжать.
							</p>
						</div>

						<div
							style={{
								background: 'rgba(127,255,158,0.05)',
								border: '1px solid rgba(127,255,158,0.12)',
								borderRadius: '20px',
								padding: '18px 20px'
							}}
						>
							<div
								style={{
									fontSize: '12px',
									textTransform: 'uppercase',
									letterSpacing: '0.08em',
									color: '#7d7d86',
									marginBottom: '8px'
								}}
							>
								Награда
							</div>

							<p
								style={{
									margin: 0,
									color: '#dfeee4',
									lineHeight: 1.8,
									fontSize: '15px'
								}}
							>
								Я проделал большую работу и заслужил подарок себе. Я могу купить
								себе что-то ценное и приятное — технику, инструмент или любую
								вещь, которая будет напоминать мне, что мой труд имеет вес.
							</p>
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '20px'
						}}
					>
						<div ref={certificateRef}>
							<Certificate name={name} />
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							gap: '12px',
							justifyContent: 'center',
							flexWrap: 'wrap'
						}}
					>
						<button
							type="button"
							onClick={handleDownload}
							style={{
								background: 'linear-gradient(90deg, #7fff9e, #a78bfa)',
								color: '#0d0d10',
								border: 'none',
								borderRadius: '14px',
								padding: '12px 18px',
								fontWeight: 700,
								cursor: 'pointer'
							}}
						>
							Скачать сертификат
						</button>

						<button
							type="button"
							onClick={onClose}
							style={{
								background: 'rgba(255,255,255,0.05)',
								color: '#f1f1f3',
								border: '1px solid rgba(255,255,255,0.08)',
								borderRadius: '14px',
								padding: '12px 18px',
								cursor: 'pointer'
							}}
						>
							Закрыть
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
