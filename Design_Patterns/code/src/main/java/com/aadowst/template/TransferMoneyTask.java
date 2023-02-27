package com.aadowst.template;

public class TransferMoneyTask extends TaskTemplate{
	public TransferMoneyTask(AuditTrail auditTrail) {
		super(auditTrail);
	}

	
	@Override
	protected void doExecute() {
		System.out.println("Transfer Money");
	}
}
