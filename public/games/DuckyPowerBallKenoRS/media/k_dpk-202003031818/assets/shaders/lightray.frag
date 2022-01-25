#define PI 3.1415962

varying vec4 vColor;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

//values used for shading algorithm...
uniform float uShineSize;
uniform float uShineIntensive;
uniform float uAngle; // in degrees
uniform float uTime; // normalized value

float when_lt(float x, float y) {
  return max(sign(y - x), 0.0);
}

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    
    float x = tan(uAngle) * vTextureCoord.y;
    
    x += uTime;
    
    float delta = abs(vTextureCoord.x - x);

    float percent = (uShineSize - delta) / uShineSize;

    float shine = (1.0 - cos(PI * percent)) * uShineIntensive;
    shine *= when_lt(delta, uShineSize);
    shine *= when_gt(color.a, 0.0);

    color.rgb += color.rgb * shine;

    gl_FragColor = color;
}