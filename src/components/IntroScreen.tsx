import "./IntroScreen.css";

interface Props {
  onStart: () => void;
}

export function IntroScreen({ onStart }: Props) {
  return (
    <div className="is-root">
      {/* ── Decorative background ── */}
      <div className="is-bg" aria-hidden="true">
        <div className="is-grid" />
        <div className="is-radar">
          <div className="is-radar-ring is-radar-ring-a" />
          <div className="is-radar-ring is-radar-ring-b" />
          <div className="is-radar-ring is-radar-ring-c" />
          <div className="is-radar-crosshair" />
          <div className="is-radar-sweep" />
        </div>
      </div>

      {/* ── Content ── */}
      <main className="is-content">
        {/* Title */}
        <header className="is-header">
          <h1 className="is-title">BATTLESHIP</h1>
          <div className="is-title-rule" />
          <p className="is-subtitle">
            Two fleets. One ocean. Neither commander sees the other.
          </p>
        </header>

        {/* Mission briefing */}
        <section className="is-briefing" aria-label="Game rules">
          <p className="is-briefing-label">MISSION BRIEFING</p>
          <ol className="is-orders">
            <li className="is-order">
              <span className="is-order-num" aria-hidden="true">01</span>
              <p className="is-order-body">
                <strong>Player 1 deploys their fleet in secret.</strong>{" "}
                <span className="is-order-detail">
                  Place all five ships on your grid. Take your time — your
                  opponent must not see the screen.
                </span>
              </p>
            </li>
            <li className="is-order">
              <span className="is-order-num" aria-hidden="true">02</span>
              <p className="is-order-body">
                <strong>Hand the device to Player 2.</strong>{" "}
                <span className="is-order-detail">
                  Shield the screen during the handoff. Player 1's board
                  stays hidden for the rest of the game.
                </span>
              </p>
            </li>
            <li className="is-order">
              <span className="is-order-num" aria-hidden="true">03</span>
              <p className="is-order-body">
                <strong>Player 2 deploys their fleet in secret.</strong>{" "}
                <span className="is-order-detail">
                  Same rules apply. Your positions are yours alone — no
                  peeking allowed.
                </span>
              </p>
            </li>
            <li className="is-order">
              <span className="is-order-num" aria-hidden="true">04</span>
              <p className="is-order-body">
                <strong>Battle begins.</strong>{" "}
                <span className="is-order-detail">
                  Players alternate firing at coordinates. Call your shot,
                  watch it land. The first fleet to be fully sunk loses.
                </span>
              </p>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <button className="is-cta" onClick={onStart}>
          Start Game
        </button>
      </main>
    </div>
  );
}
