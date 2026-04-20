import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'
import backgroundImage from './assets/bg.jpg'
import { CompletionModal } from './components/CompletionModal'
import { PhaseCard } from './components/PhaseCard'
import { roadmap } from './data/roadmap'
import { useLocalStorage } from './hooks/useLocalStorage'
import { getGlobalProgress } from './utils/progress'

type StepMeta = {
	note: string
	links: string[]
}

type StepMetaMap = Record<string, StepMeta>

const STORAGE_KEY = 'roadmap-completed-steps'
const STEP_META_KEY = 'roadmap-step-meta'

function App() {
	const [openPhase, setOpenPhase] = useState<string | null>(null)
	const [isFinished, setIsFinished] = useState(false)
	const [hasShownFinalModal, setHasShownFinalModal] = useLocalStorage<boolean>(
		'roadmap-has-shown-final-modal',
		false
	)
	const [openSteps, setOpenSteps] = useState<string[]>([])
	const [completedPhases, setCompletedPhases] = useLocalStorage<string[]>(
		'roadmap-completed-phases',
		[]
	)
	const [modal, setModal] = useState<null | {
		title: string
		message: string
	}>(null)
	const [completedSteps, setCompletedSteps] = useLocalStorage<string[]>(
		STORAGE_KEY,
		[]
	)
	const [stepMeta, setStepMeta] = useLocalStorage<StepMetaMap>(
		STEP_META_KEY,
		{}
	)

	useEffect(() => {
		for (const phase of roadmap) {
			const isCompleted = phase.steps.every(step =>
				completedSteps.includes(step.id)
			)

			const isAlreadyTracked = completedPhases.includes(phase.id)
			const isLastPhase = phase.id === roadmap[roadmap.length - 1].id

			if (isCompleted && !isAlreadyTracked) {
				setCompletedPhases(prev => [...prev, phase.id])

				// Последняя фаза не показывает обычную модалку,
				// потому что для неё будет большой финал
				if (!isLastPhase) {
					confetti({
						particleCount: 120,
						spread: 70,
						origin: { y: 0.6 }
					})

					setModal({
						title: 'Фаза завершена',
						message:
							'Ты сделал это. Это уже не случайный прогресс — это доказательство, что ты умеешь доводить путь до конца.'
					})
				}

				break
			}
		}
	}, [completedSteps, completedPhases, setCompletedPhases])

	useEffect(() => {
		const allCompleted = roadmap.every(phase =>
			phase.steps.every(step => completedSteps.includes(step.id))
		)

		if (allCompleted && !hasShownFinalModal) {
			setIsFinished(true)
			setHasShownFinalModal(true)
			setModal(null)
		}
	}, [completedSteps, hasShownFinalModal, setHasShownFinalModal])

	function togglePhase(phaseId: string) {
		setOpenPhase(prev => (prev === phaseId ? null : phaseId))
	}

	function toggleStep(stepId: string) {
		setCompletedSteps(prev =>
			prev.includes(stepId)
				? prev.filter(id => id !== stepId)
				: [...prev, stepId]
		)
	}

	function toggleStepDetails(stepId: string) {
		setOpenSteps(prev =>
			prev.includes(stepId)
				? prev.filter(id => id !== stepId)
				: [...prev, stepId]
		)
	}

	function updateStepNote(stepId: string, note: string) {
		setStepMeta(prev => ({
			...prev,
			[stepId]: {
				note,
				links: prev[stepId]?.links ?? []
			}
		}))
	}

	function addStepLink(stepId: string, link: string) {
		const trimmed = link.trim()
		if (!trimmed) return

		const finalLink = trimmed.startsWith('http')
			? trimmed
			: `https://${trimmed}`

		setStepMeta(prev => ({
			...prev,
			[stepId]: {
				note: prev[stepId]?.note ?? '',
				links: [...(prev[stepId]?.links ?? []), finalLink]
			}
		}))
	}

	function removeStepLink(stepId: string, index: number) {
		setStepMeta(prev => ({
			...prev,
			[stepId]: {
				note: prev[stepId]?.note ?? '',
				links: (prev[stepId]?.links ?? []).filter((_, i) => i !== index)
			}
		}))
	}

	const globalProgress = getGlobalProgress(roadmap, completedSteps)

	return (
		<div
			style={{
				minHeight: '100vh',
				position: 'relative',
				overflow: 'hidden',
				background: '#0b0b0c'
			}}
		>
			{/* background */}
			<div
				style={{
					position: 'fixed',
					inset: 0,
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: 0.32,
					filter: 'blur(1px)',
					transform: 'scale(1.03)',
					pointerEvents: 'none'
				}}
			/>
			{/* dark overlay */}
			<div
				style={{
					position: 'fixed',
					inset: 0,
					background:
						'linear-gradient(to bottom, rgba(8,8,10,0.78), rgba(8,8,10,0.92))',
					pointerEvents: 'none'
				}}
			/>
			{/* content */}
			<main
				style={{
					minHeight: '100vh',
					padding: '48px 20px 80px',
					maxWidth: '900px',
					margin: '0 auto',
					position: 'relative',
					zIndex: 1
				}}
			>
				<header style={{ marginBottom: '32px' }}>
					<p
						style={{
							margin: 0,
							fontSize: '12px',
							color: 'rgb(90, 88, 86)',
							letterSpacing: '0.08em',
							textTransform: 'uppercase'
						}}
					>
						Roadmap · 18 месяцев
					</p>

					<h1
						style={{
							margin: '10px 0 8px',
							fontSize: '42px',
							lineHeight: 1.05,
							fontFamily: "'Instrument Serif', serif"
						}}
					>
						2D Concept Artist
					</h1>

					<p style={{ margin: 0, color: '#a1a1aa', fontSize: '16px' }}>
						Личный трекер прогресса по roadmap
					</p>
				</header>

				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginBottom: '6px',
							fontSize: '13px',
							color: '#888'
						}}
					>
						<span>Общий прогресс</span>
						<span>{globalProgress}%</span>
					</div>

					<div
						style={{
							height: '6px',
							background: 'rgba(255,255,255,0.08)',
							borderRadius: '999px',
							overflow: 'hidden'
						}}
					>
						<div
							style={{
								height: '100%',
								width: `${globalProgress}%`,
								background: 'linear-gradient(90deg, #7fff9e, #a78bfa)',
								transition: '0.6s'
							}}
						/>
					</div>
				</div>

				<section style={{ display: 'grid', gap: '16px' }}>
					{roadmap.map(phase => (
						<PhaseCard
							key={phase.id}
							phase={phase}
							isOpen={openPhase === phase.id}
							completedSteps={completedSteps}
							openSteps={openSteps}
							stepMeta={stepMeta}
							onTogglePhase={togglePhase}
							onToggleStep={toggleStep}
							onToggleStepOpen={toggleStepDetails}
							onUpdateStepNote={updateStepNote}
							onAddStepLink={addStepLink}
							onRemoveStepLink={removeStepLink}
						/>
					))}
				</section>
			</main>
			{modal && (
				<div
					style={{
						position: 'fixed',
						inset: 0,
						background: 'rgba(0,0,0,0.6)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 100
					}}
				>
					<div
						style={{
							background: '#111',
							padding: '24px',
							borderRadius: '16px',
							maxWidth: '400px',
							width: '100%',
							border: '1px solid rgba(255,255,255,0.1)'
						}}
					>
						<h2>{modal.title}</h2>
						<p style={{ color: '#aaa' }}>{modal.message}</p>
						<button
							onClick={() => setModal(null)}
							style={{
								marginTop: '16px',
								padding: '10px 14px',
								borderRadius: '10px',
								border: 'none',
								cursor: 'pointer'
							}}
						>
							Закрыть
						</button>
					</div>
				</div>
			)}
			{isFinished && (
				<CompletionModal
					isOpen={isFinished}
					name="Arsen Kar"
					onClose={() => setIsFinished(false)}
				/>
			)}
		</div>
	)
}

export default App
