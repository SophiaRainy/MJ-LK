/**
 * 将 ephone.ai 的 Midjourney API 格式转换为目标 API 格式
 * @param {Object} dataA - ephone.ai 格式的输入数据
 * @returns {Object} 转换后的目标 API 格式数据
 */
function convertAToB(dataA) {
  return {
    prompt: dataA.prompt || '',
    negative_prompt: dataA.negative_prompt || '',
    callback_url: dataA.callback_url || '',
    discord_token: dataA.discord_token || '',
    linker_key: dataA.linker_key || '',
    channel_id: dataA.channel_id || '',
    // 其他可选参数
    img_url: dataA.img_url,
    aspect_ratio: dataA.aspect_ratio,
    seed: dataA.seed,
    stylize: dataA.stylize,
    chaos: dataA.chaos,
    quality: dataA.quality,
    tile: dataA.tile,
    version: dataA.version,
    no: dataA.no
  };
}

/**
 * 将目标 API 的响应转换回 ephone.ai 的 Midjourney API 格式
 * @param {Object} dataB - 目标 API 格式的响应数据
 * @returns {Object} 转换后的 ephone.ai 格式数据
 */
function convertBToA(dataB) {
  return {
    status: dataB.status || 'success',
    id: dataB.id || '',
    progress: dataB.progress || '',
    prompt: dataB.prompt || '',
    images: dataB.images || [],
    error: dataB.error || null,
    parameters: {
      prompt: dataB.prompt || '',
      negative_prompt: dataB.negative_prompt || '',
      callback_url: dataB.callback_url || '',
      discord_token: dataB.discord_token || '',
      linker_key: dataB.linker_key || '',
      channel_id: dataB.channel_id || '',
      // 其他可选参数
      img_url: dataB.img_url,
      aspect_ratio: dataB.aspect_ratio,
      seed: dataB.seed,
      stylize: dataB.stylize,
      chaos: dataB.chaos,
      quality: dataB.quality,
      tile: dataB.tile,
      version: dataB.version,
      no: dataB.no
    }
  };
}

module.exports = { convertAToB, convertBToA };
