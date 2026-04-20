import { getPhaseProgress } from '../utils/progress'
import { StepItem } from './StepItem'

type PhaseCardProps = {
	phase: {
		id: string
		number: number
		title: string
		months: string
		color: string
		colorSoft: string
		goals: string[]
		tools: string[]
		resources: {
			title: string
			subtitle: string
		}[]
		deliverable: {
			title: string
			description: string
		}
		steps: {
			id: string
			title: string
		}[]
	}
	isOpen: boolean
	completedSteps: string[]
	openSteps: string[]
	stepMeta: Record<string, { note: string; links: string[] }>
	onTogglePhase: (phaseId: string) => void
	onToggleStep: (stepId: string) => void
	onToggleStepOpen: (stepId: string) => void
	onUpdateStepNote: (stepId: string, note: string) => void
	onAddStepLink: (stepId: string, link: string) => void
	onRemoveStepLink: (stepId: string, index: number) => void
}

export function PhaseCard({
	phase,
	isOpen,
	completedSteps,
	openSteps,
	stepMeta,
	onTogglePhase,
	onToggleStep,
	onToggleStepOpen,
	onUpdateStepNote,
	onAddStepLink,
	onRemoveStepLink
}: PhaseCardProps) {
	const progress = getPhaseProgress(phase.steps, completedSteps)

	function isPhaseCompleted(steps: { id: string }[], completedSteps: string[]) {
		return steps.every(step => completedSteps.includes(step.id))
	}

	return (
		<article
			style={{
				background: '#161618',
				border: '1px solid rgba(255,255,255,0.08)',
				borderRadius: '20px',
				padding: '20px'
			}}
		>
			<div
				onClick={() => onTogglePhase(phase.id)}
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					gap: '14px',
					cursor: 'pointer'
				}}
			>
				<div
					style={{
						width: '40px',
						height: '40px',
						borderRadius: '999px',
						background: phase.colorSoft,
						color: phase.color,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 700,
						flexShrink: 0
					}}
				>
					{phase.number}
				</div>

				<div style={{ flex: 1 }}>
					<h2 style={{ margin: 0, fontSize: '22px' }}>{phase.title}</h2>
					<p style={{ margin: '6px 0 0', color: '#a1a1aa', fontSize: '14px' }}>
						{phase.months}
					</p>
				</div>

				<div
					style={{
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: '0.2s',
						color: '#777',
						marginTop: '6px'
					}}
				>
					▼
				</div>

				<div style={{ color: '#888', fontSize: '13px', marginTop: '6px' }}>
					{progress}%
				</div>
			</div>

			<div
				style={{
					height: '4px',
					background: 'rgba(255,255,255,0.08)',
					borderRadius: '999px',
					overflow: 'hidden',
					marginTop: '12px'
				}}
			>
				<div
					style={{
						height: '100%',
						width: `${progress}%`,
						background: phase.color,
						transition: '0.4s'
					}}
				/>
			</div>

			{isOpen && (
				<div
					style={{ marginTop: '20px' }}
					onClick={e => e.stopPropagation()}
				>
					<div style={{ marginBottom: '16px' }}>
						<p style={{ color: '#777', fontSize: '12px' }}>Цели</p>
						<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
							{phase.goals.map((goal, i) => (
								<span
									key={i}
									style={{
										fontSize: '12px',
										padding: '4px 10px',
										borderRadius: '999px',
										background: 'rgba(255,255,255,0.06)'
									}}
								>
									{goal}
								</span>
							))}
						</div>
					</div>

					<div style={{ marginBottom: '16px' }}>
						<p style={{ color: '#777', fontSize: '12px' }}>Инструменты</p>
						<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
							{phase.tools.map((tool, i) => (
								<span
									key={i}
									style={{
										fontSize: '12px',
										padding: '4px 10px',
										borderRadius: '999px',
										background: 'rgba(255,255,255,0.06)'
									}}
								>
									{tool}
								</span>
							))}
						</div>
					</div>

					<div style={{ marginBottom: '16px' }}>
						<p style={{ color: '#777', fontSize: '12px' }}>Ресурсы</p>
						<div style={{ display: 'grid', gap: '8px' }}>
							{phase.resources.map((res, i) => (
								<div
									key={i}
									style={{
										padding: '10px',
										borderRadius: '10px',
										background: 'rgba(255,255,255,0.04)',
										border: '1px solid rgba(255,255,255,0.06)'
									}}
								>
									<strong>{res.title}</strong>
									<p
										style={{
											margin: '4px 0 0',
											fontSize: '13px',
											color: '#aaa'
										}}
									>
										{res.subtitle}
									</p>
								</div>
							))}
						</div>
					</div>

					<div
						style={{
							padding: '12px',
							borderRadius: '12px',
							background: 'rgba(255,255,255,0.05)',
							borderLeft: `3px solid ${phase.color}`
						}}
					>
						<strong>{phase.deliverable.title}</strong>
						<p style={{ margin: '6px 0 0', fontSize: '14px', color: '#bbb' }}>
							{phase.deliverable.description}
						</p>
					</div>

					<div style={{ marginTop: '20px' }}>
						<p style={{ color: '#777', fontSize: '12px' }}>Прогресс</p>

						<div style={{ display: 'grid', gap: '8px' }}>
							{phase.steps.map(step => (
								<StepItem
									key={step.id}
									step={step}
									done={completedSteps.includes(step.id)}
									isOpen={openSteps.includes(step.id)}
									note={stepMeta[step.id]?.note ?? ''}
									links={stepMeta[step.id]?.links ?? []}
									phaseColor={phase.color}
									phaseColorSoft={phase.colorSoft}
									onToggleDone={onToggleStep}
									onToggleOpen={onToggleStepOpen}
									onUpdateNote={onUpdateStepNote}
									onAddLink={onAddStepLink}
									onRemoveLink={onRemoveStepLink}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</article>
	)
}
