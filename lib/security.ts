import * as Crypto from 'expo-crypto';

/**
 * Utilitário de segurança para conformidade LGPD.
 * Simula a criptografia de dados sensíveis antes de salvar no banco de dados.
 */
export const Security = {
  /**
   * Criptografa uma string usando um algoritmo seguro (ex: AES-256 simulação).
   */
  async encrypt(data: string): Promise<string> {
    // Para fins de demonstração, usamos um hash de 256 bits 
    // Em um cenário real, usaríamos uma biblioteca como react-native-aes-crypto
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data
    );
    return `ENCRYPTED_ELITE_VAULT_${digest}`;
  },

  /**
   * Verifica a integridade dos dados (LGPD Requirement).
   */
  async verifyIntegrity(data: string, hash: string): Promise<boolean> {
    const newHash = await this.encrypt(data);
    return newHash === hash;
  }
};
