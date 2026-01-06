//https://github.com/tsoding/formula
// MIT

const BACKGROUND = "#13151a" // Matched to dark theme background
const FOREGROUND = "#6db1ff" // Matched to accent color

export function startRender(canvasId, { vs, fs }) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id ${canvasId} not found`);
        return;
    }

    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    function clear() {
        ctx.fillStyle = BACKGROUND;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function point({ x, y }) {
        const s = 4; // Smaller points for better look
        ctx.fillStyle = FOREGROUND;
        ctx.fillRect(x - s / 2, y - s / 2, s, s);
    }

    function line(p1, p2) {
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = FOREGROUND;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }

    function screen(p) {
        // -1..1 => 0..2 => 0..1 => 0..w
        return {
            x: (p.x + 1) / 2 * canvas.width,
            y: (1 - (p.y + 1) / 2) * canvas.height,
        }
    }

    function project({ x, y, z }) {
        return {
            x: x / z,
            y: y / z,
        }
    }

    const FPS = 60;

    function translate_z({ x, y, z }, dz) {
        return { x, y, z: z + dz };
    }

    function rotate_xz({ x, y, z }, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        return {
            x: x * c - z * s,
            y,
            z: x * s + z * c,
        };
    }

    let dz = 2.5; // Moved camera closer (from 4.0)
    let angle = 0;

    function frame() {
        const dt = 1 / FPS;
        angle += Math.PI * 0.25 * dt; // Slowed down rotation by half
        clear();

        if (fs) {
            for (const f of fs) {
                for (let i = 0; i < f.length; ++i) {
                    const a = vs[f[i]];
                    const b = vs[f[(i + 1) % f.length]];
                    line(screen(project(translate_z(rotate_xz(a, angle), dz))),
                        screen(project(translate_z(rotate_xz(b, angle), dz))))
                }
            }
        } else {
            for (const v of vs) {
                point(screen(project(translate_z(rotate_xz(v, angle), dz))))
            }
        }

        requestAnimationFrame(frame);
    }

    frame();
}
